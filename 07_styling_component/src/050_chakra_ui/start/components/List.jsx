// Chakra ui で使用するスタイリングはあくまでChakrauiからimportしないと使えないので都度、importの記載をする
import { StackDivider, VStack, HStack, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider={<StackDivider />}
            width="80%"
            bgColor="white"
            // smはスマホ,mdはipad等のタブレット,lgはノートPC,xlはデスクトップ,2xlはより大きなサイズ
            // color={{ sm:'red.600', md:'blue.600', lg:'green.500', xl:'red.500' }}
            borderColor="blackAlpha.100"
            borderWidth="1px"
            borderRadius="3px" //CSSのスタイリング、border-radiusが適用されていると同じ
            p={5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton onClick={() => complete(todo.id)} icon={<VscCheck />}isRound
                        bgColor="cyan.100" opacity="0.5">完了</IconButton>
                        <Text>{todo.content}</Text>
                        {/* //spanタグとTextタグと使用の違い　Textタグにしておくと後々のプロパティの設定が楽になる */}
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;
