import * as Yup from "yup"

const estateValidation = Yup.object({
    title: Yup.string().required("قم بادخال العنوان"),
    adType: Yup.string().required("قم بادخال نوع الاعلان"),
    price: Yup.number().required("قم بادخال السعر"),
    currency: Yup.string().required("قم باختيار العملة"),
    payType: Yup.string().required("قم باختيار نوع الدفع"),
    city: Yup.string().required("قم باختيار المدينة"),
    estateType: Yup.string().required("قم باختيار نوع الوحدة"),
    parking: Yup.number().required("قم بادخال عدد الباركينج"),
    toilet: Yup.number().required("قم بادخال عدد الحمامات"),
    rooms: Yup.number().required("قم بادخال عدد غلاف النوم"),
    landErea: Yup.number().required("قم بادخال مساحة الارض"),
    buildingErea: Yup.number().required("قم بادخال مساحة البناء"),
    content: Yup.string().required("قم بادخال المحتوي"),
    agent: Yup.string().required("قم باختيار المكتب"),
})

export default estateValidation