import { FormControl, FormLabel, Select } from "@chakra-ui/react"
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom"

const FilterBox = () => {
    const navigate = useNavigate();
    const [queries, setQueries] = useState({});
    const goToFilterPage = ()=>{
        navigate({
            pathname: "/filter",
            search: `?${createSearchParams(queries)}`,
        })
    }
    return (
        <div className="box bg-white rounded mt-10 p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <FormControl>
                    <FormLabel>نوع العقار</FormLabel>
                    <Select value={queries.type} onChange={(e)=>{setQueries({...queries, type: e.target.value})}} >
                        <option value="" selected>جميع انواع العقارات</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>نوع الاعلان</FormLabel>
                    <Select value={queries.adType} onChange={(e)=>{setQueries({...queries, adType: e.target.value})}}>
                        <option value="" selected>جميع انواع الاعلانات</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>كل المدن</FormLabel>
                    <Select value={queries.city} onChange={(e)=>{setQueries({...queries, city: e.target.value})}}>
                        <option value="" selected>كل المدن</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>غرف النوم</FormLabel>
                    <Select value={queries.rooms} onChange={(e)=>{setQueries({...queries, rooms: e.target.value})}}>
                        <option value="" selected disabled>عدد غرف النوم</option>
                        <option value='option2'>1</option>
                        <option value='option3'>2</option>
                        <option value='option3'>3</option>
                        <option value='option3'>4</option>
                        <option value='option3'>5</option>
                        <option value='option3'>6</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>عدد الطوابق</FormLabel>
                    <Select value={queries.floors} onChange={(e)=>{setQueries({...queries, floors: e.target.value})}}>
                        <option value="" selected disabled>عدد الطوابق</option>
                        <option value='option2'>1</option>
                        <option value='option3'>2</option>
                        <option value='option3'>3</option>
                        <option value='option3'>4</option>
                        <option value='option3'>5</option>
                        <option value='option3'>6</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>عدد الحمامات</FormLabel>
                    <Select value={queries.toilets} onChange={(e)=>{setQueries({...queries, toilets: e.target.value})}}>
                        <option value="" selected disabled>عدد الحمامات</option>
                        <option value='option2'>1</option>
                        <option value='option3'>2</option>
                        <option value='option3'>3</option>
                        <option value='option3'>4</option>
                        <option value='option3'>5</option>
                        <option value='option3'>6</option>
                    </Select>
                </FormControl>
            </div>
            <button onClick={goToFilterPage} className="bg-primary-100 block w-full text-lg mt-5 text-center text-white rounded px-5 py-2 hover:bg-primary-200">بحث</button>
        </div>

    )
}

export default FilterBox