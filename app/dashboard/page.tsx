
import type { NextPage } from "next";
import movies from './app.json'
import Link from "next/link";
import { useState } from "react";

const DashboardPage = () => {
    return (
        <div>
            <div className="container pt-2"  style={{ background: "linear-gradient(120deg, rgb(255, 232, 255) 9%, rgb(224, 239, 255) 53%)" }}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Movie Search</h1>
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-bold">Enter Movie Name</label>
                                <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Movie Name" />
                                <button type="submit" className="btn btn-success w-100">Search</button>
                            </div>
                        </div>
                        <div className="col-12">
                            {movies.map(movie => (
                                <div className="card align-items-center mb-3 bg-transparent">
                                    <div className="card-body d-flex">
                                        <div key={movie.id}>
                                            <img src={movie.image} alt={movie.title} />
                                            <div className="inner_content">
                                                <h2>{movie.title}</h2>
                                                <p>Release Date: {movie.release_date}</p>
                                                <p>{movie.overview}</p>
                                            </div>
                                            <Link className="btn btn-primary w-100" href="/ViewDetails"> View more</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardPage;