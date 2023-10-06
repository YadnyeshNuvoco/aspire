'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import CareerTimeline from "@/components/CareerTimeline";
import Image from "next/image";

export default function Page({ params }) {
    const [possiblemovement, setPossiblemovement] = useState({});

    const fetchpossiblemovement = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/possiblemove/${params.data[0]}/${params.data[1]}/${params.data[2]}`
            );
            setPossiblemovement(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchpossiblemovement();
    }, []);

    return (
        <div>
            <div className="absolute top-0 right-0 p-4">
                <Link href="/careerpath2/1">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
            </div>
            <CareerTimeline movements={possiblemovement} />
        </div>
    );
}
