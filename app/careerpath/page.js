'use client'
import { useState, useEffect } from "react"
import Image from 'next/image';
import Link from 'next/link';
import Functiondropdown from "@/components/Functiondropdown";
import Departmentdropdown from "@/components/Departmentdropdown";
import Uniqueroledropdown from "@/components/Uniqueroledropdown"
import axios from "axios";

export default function careerpath() {

    const [functions, setFunctions] = useState("");
    const [fnoptions, setFnoptions] = useState([]);

    const [departments, setDepartments] = useState("");
    const [depoptions, setDepoptions] = useState([]);

    const [uniqueroles, setUniqueroles] = useState("");
    const [unqoptions, setUnqoptions] = useState([]);


    const fetchfnoptions = async () => {
        try {
            const response = await axios.get('http://localhost:3000/functions');
            setFnoptions(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchdeparments = async (id) => {
        if (id != "") {
            try {
                const response = await axios.get(`http://localhost:3000/departments/${id}`);
                setDepoptions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        else {
            setDepoptions([]);
            setUnqoptions([]);
        }

    }

    const fetchuniqueroles = async (depid) => {
        if (depid != "") {
            try {
                const response = await axios.get(`http://localhost:3000/uniqueroles/${functions}/${depid}`);
                setUnqoptions(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        else {
            setUnqoptions([]);
        }

    }

    const handleFunctionsChange = async (event) => {
        setFunctions(event.target.value);
        await fetchdeparments(event.target.value);
    };

    const handleDepartmentsChange = async (event) => {
        setDepartments(event.target.value);
        fetchuniqueroles(event.target.value);
    };

    const handleUniquerolesChange = async (event) => {
        setUniqueroles(event.target.value);
    };

    useEffect(() => {
        fetchfnoptions();
    }, []);

    return (
        <main className="flex min-h-screen">
            <div className="fixed top-0 left-0 p-4">
                <Link href="/">
                    <Image
                        src="/logo3.png"
                        alt="Logo"
                        width={100}
                        height={32}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>

            <div className="w-full mt-4 py-10">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="p-2 w-1/3">Function</th>
                            <th className="p-2 w-1/3">Department</th>
                            <th className="p-2 w-1/3">Unique Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 w-1/3">
                                <Functiondropdown
                                    options={fnoptions}
                                    functions={functions}
                                    handlefunctionschange={handleFunctionsChange}
                                />
                            </td>
                            <td className="p-2 w-1/3">
                                <Departmentdropdown
                                    options={depoptions}
                                    departments={departments}
                                    handleDepartmentsChange={handleDepartmentsChange}
                                />
                            </td>
                            <td className="p-2 w-1/3">
                                <Uniqueroledropdown
                                    options={unqoptions}
                                    uniqueroles={uniqueroles}
                                    handleUniquerolesChange={handleUniquerolesChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="p-2 w-full">
                                <button
                                    className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-4 rounded-full w-full"
                                // onClick={handleButtonClick}
                                >
                                    Your Button Text
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
    );
}
