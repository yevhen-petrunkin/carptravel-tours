import TextAlignT from "@/types/TextAlignT";

interface IParagraphProps {
  size: string[];
  line: number[];
  highlight?: string;
  content: string;
  align?: TextAlignT[];
}

export default IParagraphProps;
