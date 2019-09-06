class Tweet
  attr_accessor :message, :username, :id

  def self.all
    sql = "SELECT * FROM tweets;"

    tweets_as_hashes = DB[:conn].execute(sql)

    tweets_as_hashes.map {|t_hash| Tweet.new(t_hash)}
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def self.create(props={})
    tweet = Tweet.new(props)
    tweet.save
    tweet
  end

  def self.find(id)
    sql = "SELECT * FROM tweets WHERE id = ?"

    results = DB[:conn].execute(sql, id)

    Tweet.new(results.first)
  end

  def update(props={})
    @message = props['message'] || @message
    @username = props['username'] || @username
    @id = props['id'] || @id
    self.save
  end

  def save

    if @id != nil
      sql = "UPDATE tweets SET message = ?, username = ? WHERE id = ?;"

      DB[:conn].execute(sql, self.message, self.username, self.id)
      
      self
    else
      sql = "INSERT INTO tweets(message, username) VALUES(?, ?);"

      DB[:conn].execute(sql, self.message, self.username)
      
      @id = DB[:conn].execute("SELECT last_insert_rowid() FROM tweets").first["last_insert_rowid()"]

      self
    end
  end

  def destroy
    sql = 'DELETE FROM tweets WHERE id = ?;'

    DB[:conn].execute(sql, self.id)

    true
  end
end
