import { Skeleton } from "@mantine/core";
import useDeviceDetect from "../hooks/useDeviceDetect";

const SkeletonsComponent = () => {
    const isMobile = useDeviceDetect()

    let width = "70%"

    if (isMobile) {
        width = "100%"
    }

    return <>
        <Skeleton height={46} mt='xl' width={width} radius="lg" />
        <Skeleton height={8} mt='md' width={width} radius="xl" />
        <Skeleton height={8} mt='md' width={width} radius="xl" />
        <Skeleton height={300} mt='md' width={width} radius="xl" />
        <Skeleton height={8} mt='md' width={width} radius="xl" />
        <Skeleton height={8} mt='md' width={width} radius="xl" />
        <Skeleton height={300} mt='md' width={width} radius="xl" />
    </>
}

export default SkeletonsComponent;