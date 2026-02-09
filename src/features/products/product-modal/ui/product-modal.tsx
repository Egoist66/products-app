import { Alert, Button, Modal, TextInput, Textarea } from "@mantine/core";
import { useModal } from "../../../../shared/hooks/service/use-modal";
import { useModalData } from "../../../../shared/hooks/modal-data/use-modal-data";
import { IconAlertCircle } from "@tabler/icons-react";
import type { FC } from "react";

export const ProductModal: FC<{ mode: "add" | "edit" }> = ({ mode }) => {
  const { close, open, opened } = useModal();

  const {
    id,
    title,
    price,
    description,
    category,
    image,
    isError,
    isSaving,
    isSuccess,
    onModalDataChange,
    handleSubmit,
  } = useModalData(close, mode);

  return (
    <>
      <Modal
        size={"lg"}
        className="modal"
        opened={opened}
        onClose={close}
        title={mode === "add" ? "Add Product" : "Edit Product"}
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            label="ID"
            required
            type="number"
            value={id}
            name="id"
            onChange={onModalDataChange}
          />
          <TextInput
            label="Title"
            required
            type="text"
            name="title"
            value={title}
            onChange={onModalDataChange}
          />
          <TextInput
            label="Price"
            type="text"
            required
            name="price"
            value={price}
            onChange={onModalDataChange}
          />
          <Textarea
            label="Description"
            value={description}
            required
            name="description"
            onChange={onModalDataChange}
          />
          <TextInput
            label="Category"
            required
            type="text"
            value={category}
            name="category"
            onChange={onModalDataChange}
          />
          <TextInput
            label="Image"
            required
            type="text"
            name="image"
            value={image}
            onChange={onModalDataChange}
          />
          <Button disabled={isSaving} mt={30} type="submit">
            {isSaving
              ? mode === "add"
                ? "Adding..."
                : "Editing..."
              : mode === "add"
                ? "Add Product"
                : "Edit Product"}
          </Button>
        </form>

        {isError && (
          <Alert
            variant="outline"
            color="red"
            title="Error"
            icon={<IconAlertCircle size={16} />}
          >
            {mode === "add" ? "Product not added" : "Product not edited"}
          </Alert>
        )}

        {isSuccess && (
          <Alert
            variant="outline"
            color="green"
            title="Success"
            icon={<IconAlertCircle size={16} />}
          >
            {mode === "add" ? "Product added" : "Product edited"}
          </Alert>
        )}
      </Modal>

      <Button onClick={open}>
        {mode === "add" ? "Add product" : "Edit product"}
      </Button>
    </>
  );
};
