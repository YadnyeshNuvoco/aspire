'use client'
import { useState, useEffect } from "react"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Functiondropdown from "@/components/Functiondropdown";
import Departmentdropdown from "@/components/Departmentdropdown";
import Uniqueroledropdown from "@/components/Uniqueroledropdown"
import axios from "axios";
import DisplayMovement from "@/components/Displaymovements";
import Displaymovement2 from "@/components/Departmentmovement2";
import { IoIosArrowDown } from 'react-icons/io';



export default function careerpath2({ params }) {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");


    const [functions, setFunctions] = useState(params.id);
    const [fnoptions, setFnoptions] = useState([]);

    const [departments, setDepartments] = useState("");
    const [depoptions, setDepoptions] = useState([]);

    const [uniqueroles, setUniqueroles] = useState("");
    const [unqoptions, setUnqoptions] = useState([]);

    // const [possiblemovement, setPossiblemovement] = useState("");

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

    // const fetchpossiblemovement = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:3000/possiblemove/${functions}/${departments}/${uniqueroles}`);
    //         setPossiblemovement(response.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
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
        if (params.id) {
            fetchdeparments(params.id)
        }


    }, [params.id]);

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="fixed top-0 left-1 p-4 w-full sm:w-1/2 lg:w-1/3">
                <Link href="/">
                    <Image
                        src="/logo3.png"
                        alt="Logo"
                        width={170}
                        height={54}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>

            <form className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-1/2 lg:w-1/3" onSubmit={(e) => { e.preventDefault(); router.push(`/careerpath2/display/${functions}/${departments}/${uniqueroles}`) }}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value={username}
                        onChange={handleUsernameChange}
                        className="block appearance-none w-full bg-white border border-green-300 hover:border-green-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="function" className="block text-gray-700 text-sm font-bold mb-2">
                        Function
                    </label>
                    <Functiondropdown
                        options={fnoptions}
                        functions={functions}
                        handlefunctionschange={handleFunctionsChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
                        Department
                    </label>
                    <Departmentdropdown
                        options={depoptions}
                        departments={departments}
                        handleDepartmentsChange={handleDepartmentsChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="uniquerole" className="block text-gray-700 text-sm font-bold mb-2">
                        Unique Roles
                    </label>
                    <Uniqueroledropdown
                        options={unqoptions}
                        uniqueroles={uniqueroles}
                        handleUniquerolesChange={handleUniquerolesChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-900  font-bold mb-2">Gender</label>
                    <div className="flex items-center space-x-4">
                        <label className={`relative cursor-pointer  px-4 py-2 rounded-lg border border-green-200 hover:bg-green-200 hover:text-green-800 ${gender === 'male' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={handleGenderChange}
                                className="hidden"
                            />
                            Male
                        </label>
                        <label className={`relative cursor-pointer  px-4 py-2 rounded-lg border border-green-200 hover:bg-green-200 hover:text-green-800 ${gender === 'female' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={handleGenderChange}
                                className="hidden"
                            />
                            Female
                        </label>
                    </div>
                </div>


                <div className="mb-4">
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-4 mt-2 rounded-full"
                    />
                </div>
            </form>
        </main>
    );
}
