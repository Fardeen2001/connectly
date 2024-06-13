import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const CreateGroup = ({ setShowPopup }) => {
    return (
        <div onClick={() => setShowPopup(false)} className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6">
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-bold mb-4">Create Group</h2>
                    <p
                        className="border-2 border-[#F45044] p-1 cursor-pointer rounded-full"
                        onClick={() => setShowPopup(false)}
                    >
                        <RxCross2 size={22} className='text-[#F45044]' />
                    </p>
                </div>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center gap-2'>
                            <div>
                                <label htmlFor="coverImage" className="text-gray-700 text-sm font-bold mb-2">
                                    Cover Image
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="file"
                                        id="coverImage"
                                        accept="image/*"
                                        className=""
                                    />

                                </div>
                            </div>
                            <div>
                                <label htmlFor="profileImage" className="text-gray-700 text-sm font-bold mb-2">
                                    Group Profile Image
                                </label>
                                <div className="flex items-center">

                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/*"
                                        className=""
                                    />

                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div>
                                <label htmlFor="groupName" className="text-gray-700 text-sm font-bold mb-2">
                                    Group Name
                                </label>
                                <input
                                    type="text"
                                    id="groupName"
                                    placeholder='Name'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <label htmlFor="invitedFriends" className="text-gray-700 text-sm font-bold mb-2">
                                    Invite Friends
                                </label>
                                <input
                                    type="text"
                                    id="invitedFriends"
                                    placeholder='Friends'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="groupDescription" className="text-gray-700 text-sm font-bold mb-2">
                                Group Description
                            </label>
                            <textarea
                                id="groupDescription"
                                placeholder='Description'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Group
                        </button>
                    </div>
                </form>

            </div>
        </div>)
}

export default CreateGroup