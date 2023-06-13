import React from 'react'

const Sort = () => {
    return (
        <div>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a href="/" class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="/">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="/">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="/">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sort
