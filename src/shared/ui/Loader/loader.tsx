import { Loader } from "@mantine/core";

export const PreLoader = () => {
    return (
        <div className="loader-wrapper">
            <Loader color="blue" size="xl" type="bars" />
        </div>
    )
}