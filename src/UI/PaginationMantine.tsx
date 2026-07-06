import { Pagination, Center } from '@mantine/core';


export default function PaginationMantine() {
    return (
        <Center mt="md">
        <Pagination total={10} />
        </Center>
    );
}