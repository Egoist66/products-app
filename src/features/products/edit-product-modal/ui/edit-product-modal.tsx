import { Button, Modal, TextInput, NumberInput, Textarea } from "@mantine/core";
import { useModal } from "../../../../shared/hooks/service/use-modal";
import { useModalData } from "../../../../shared/hooks/modal-data/use-modal-data";

export const EditProductModal = () => {
  const { close, open, opened } = useModal();

  const {
    id,
    setId,
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    category,
    setCategory,
    image,
    setImage,
    handleSubmit
  } = useModalData()

  return (
    <>
      <Modal size={'lg'} className="modal" opened={opened} onClose={close} title="Edit product">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="ID"
            type="number"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
          />
          <TextInput
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <NumberInput
            label="Price"
            type="text"
            value={price}
            onChange={(val) => setPrice(Number(val))}
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextInput
            label="Category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextInput
            label="Image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button mt={30} type="submit">Save</Button>
        </form>
      </Modal>

      <Button onClick={open}>Edit product</Button>
    </>
  );
};
