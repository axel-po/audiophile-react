import { HeaderCategoryWrapper, HeaderCategoryContainer, Title } from "./HeaderCategory.Style";

export default function HeaderCategory({ title }) {
  return (
    <HeaderCategoryWrapper>
      <HeaderCategoryContainer>
        <Title>{title}</Title>
      </HeaderCategoryContainer>
    </HeaderCategoryWrapper>
  );
}
