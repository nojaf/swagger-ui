/**
 * @prettier
 */
import JSONSchema from "./components/JSONSchema/JSONSchema"
import KeywordProperties from "./components/keywords/Properties/Properties"
import Keyword$schema from "./components/keywords/$schema"
import Keyword$vocabulary from "./components/keywords/$vocabulary/$vocabulary"
import Keyword$id from "./components/keywords/$id"
import Keyword$anchor from "./components/keywords/$anchor"
import Keyword$dynamicAnchor from "./components/keywords/$dynamicAnchor"
import Keyword$ref from "./components/keywords/$ref"
import Keyword$dynamicRef from "./components/keywords/$dynamicRef"
import Keyword$defs from "./components/keywords/$defs/$defs"
import KeywordType from "./components/keywords/Type/Type"
import KeywordFormat from "./components/keywords/Format/Format"
import KeywordTitle from "./components/keywords/Title/Title"
import KeywordDescription from "./components/keywords/Description/Description"
import Accordion from "./components/Accordion/Accordion"
import ExpandDeepButton from "./components/ExpandDeepButton/ExpandDeepButton"
import ChevronRightIcon from "./components/icons/ChevronRight"
import { upperFirst } from "./fn"
import { withJSONSchemaContext } from "./hoc"

const JSONSchema202012Plugin = () => ({
  components: {
    JSONSchema202012: JSONSchema,
    JSONSchema202012Keyword$schema: Keyword$schema,
    JSONSchema202012Keyword$vocabulary: Keyword$vocabulary,
    JSONSchema202012Keyword$id: Keyword$id,
    JSONSchema202012Keyword$anchor: Keyword$anchor,
    JSONSchema202012Keyword$dynamicAnchor: Keyword$dynamicAnchor,
    JSONSchema202012Keyword$ref: Keyword$ref,
    JSONSchema202012Keyword$dynamicRef: Keyword$dynamicRef,
    JSONSchema202012Keyword$defs: Keyword$defs,
    JSONSchema202012KeywordProperties: KeywordProperties,
    JSONSchema202012KeywordType: KeywordType,
    JSONSchema202012KeywordFormat: KeywordFormat,
    JSONSchema202012KeywordTitle: KeywordTitle,
    JSONSchema202012KeywordDescription: KeywordDescription,
    JSONSchema202012Accordion: Accordion,
    JSONSchema202012ExpandDeepButton: ExpandDeepButton,
    JSONSchema202012ChevronRightIcon: ChevronRightIcon,
    withJSONSchema202012Context: withJSONSchemaContext,
  },
  fn: {
    upperFirst,
  },
})

export default JSONSchema202012Plugin
