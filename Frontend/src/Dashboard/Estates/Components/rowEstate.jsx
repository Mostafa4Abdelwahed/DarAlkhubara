import { Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Td, Tr, useDisclosure } from "@chakra-ui/react"
import BadgeAuto from "../../../Ui/BadgeAuto"
import { BiSolidChevronDown } from "react-icons/bi"
import { useNavigate } from "react-router-dom";

const rowEstate = ({ estate }) => {
    const confirmDelete = useDisclosure();
    const UpdateImages = useDisclosure();
    const navigate = useNavigate();

    const editPage = ()=>{
        navigate({
            pathname: `/dashboard/estates/${"dsd"}`
        })
    }

    return (
        <>
            <Tr>
                <Td>
                    <img className="rounded-sm" src={estate.image} alt="" />
                </Td>
                <Td>{estate.agent}</Td>
                <Td>{estate.title}</Td>
                <Td><BadgeAuto type={estate.estateType}>{estate.estateType}</BadgeAuto></Td>
                <Td><BadgeAuto type={estate.adType}>{estate.adType}</BadgeAuto></Td>
                <Td>{estate.city}</Td>
                <Td>{estate.price} {estate.currency}</Td>
                <Td>{
                    estate.features.map((feature) => {
                        return (
                            <span>{feature}.</span>
                        )
                    })}
                </Td>
                <Td className="flex gap-2.5">
                    <Menu>
                        <MenuButton colorScheme="blue" as={Button} rightIcon={<BiSolidChevronDown />}>
                            تعديل
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={UpdateImages.onOpen}>تعديل الصور</MenuItem>
                            <MenuItem onClick={editPage}>تعديل الوحدة</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button onClick={confirmDelete.onOpen} colorScheme='red'>حذف</Button>
                </Td>
            </Tr>

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
        </>
    )
}

export default rowEstate