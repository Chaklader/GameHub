import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";


interface Props {
    onSearch: (searchedText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value);
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder="Search Games ..." variant={'filled'}/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;