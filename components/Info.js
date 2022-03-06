import Link from 'next/link'
import React from 'react'

const Info = () => {
    return (
        <section className="container-fluid info-container">
            <h3>Vraag naar informatie</h3>
            <button>
                <Link href="#">
                    <a>Contact</a>
                </Link>
            </button>
        </section>
    )
}

export default Info