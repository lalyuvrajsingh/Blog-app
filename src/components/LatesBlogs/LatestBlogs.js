"use client"
import React from 'react';
import Blog from '../BlogPost/BlogPost';
import Work from '../work/Work';
import { useState } from 'react';
import { useEffect } from 'react';

const LatestBlogs = () => {



    return (
        <div>

                <section className="py-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="slide-in text-5xl font-bold m-5 mb-10">Latest Blogs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <Blog/>
                            <Blog/>
                            <Blog/>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default LatestBlogs;
