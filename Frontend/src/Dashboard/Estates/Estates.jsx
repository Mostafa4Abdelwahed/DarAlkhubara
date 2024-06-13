import React, { useState } from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, MenuButton, MenuList, MenuItem, Menu, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import Container from "./../../Ui/Container"
import { IoIosAdd } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import RowEstate from "./Components/rowEstate"


const Estates = () => {
    const confirmDelete = useDisclosure();
    const UpdateImages = useDisclosure();

    const navigate = useNavigate();
    const estates = [
        {
            _id: "46ds45ds55ds4645sd4ds",
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجير",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "شقة",
            adType: "بيع",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "بناية كاملة",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "قطعة أرض",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
        {
            image: "https://mostaql.hsoubcdn.com/uploads/portfolios/432221/63b362f4c7067/screencapture-dkrqtr-ae-account-property-2023-01-03-010004.png",
            agent: "دار الخبراء للعقارات",
            title: "لندن ويستمنيستر",
            estateType: "فيلا",
            adType: "تأجيؤ",
            city: "لندن - بريطانيا",
            price: "30.000.00",
            currency: "ج.م",
            features: ["وايفاي", "مفروش", "موقف سيارات", "صالة رياضية"],
        },
    ]

    return (
        <div>
            <Container>
                <header className="flex justify-between mt-5">
                    <h1 className="text-2xl font-bold">الوحدات</h1>
                    <Button onClick={() => { navigate({ pathname: "/dashboard/estates/add" }) }} leftIcon={<IoIosAdd />} colorScheme='teal' variant='solid'>
                        إضافة
                    </Button>
                </header>

                <main className="py-7">
                    <TableContainer>
                        <Table className="bg-white" variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>صورة</Th>
                                    <Th>مكتب</Th>
                                    <Th>العنوان</Th>
                                    <Th>نوع  الوحدة</Th>
                                    <Th>نوع  الاعلان</Th>
                                    <Th>المدينة</Th>
                                    <Th>السعر</Th>
                                    <Th>الاضافات</Th>
                                    <Th>أفعال</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    estates.map((estate) => {
                                        return (
                                            <RowEstate estate={estate} />
                                        )
                                    })
                                }

                            </Tbody>
                        </Table>
                    </TableContainer>
                </main>
            </Container>

            {/* Modal Confirm Delete */}
            <Modal isOpen={confirmDelete.isOpen} onClose={confirmDelete.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>حذف الوحدة</ModalHeader>
                    <ModalBody>
                        <h1 className="text-lg">هل انت متأكد من حذف تلك الوحدة, إذا قمت بحذفها لا يمكنك إستردادها مرة  اخري.</h1>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' ml={3}>
                            حذف
                        </Button>
                        <Button onClick={confirmDelete.onClose} variant='ghost'>إلغاء</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal Update Images */}
            <Modal isOpen={UpdateImages.isOpen} onClose={UpdateImages.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>تعديل الصور</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>الصور</FormLabel>
                            <Input type='file' multiple />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' ml={3}>
                            تعديل
                        </Button>
                        <Button onClick={UpdateImages.onClose} variant='ghost'>إلغاء</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}

export default Estates