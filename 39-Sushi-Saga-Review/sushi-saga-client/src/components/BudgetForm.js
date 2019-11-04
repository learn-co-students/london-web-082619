import React from 'react'

export default function BudgetForm({budget, handleInputChange, handleSubmit}) {
    return (
        <div>
            <form
            onSubmit={handleSubmit}>
                <input
                type="number"
                value={budget}
                onChange={handleInputChange}
                >
                </input>
            </form>
        </div>
    )
}
