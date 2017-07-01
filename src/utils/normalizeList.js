import { compose, map, fromPairs } from "ramda";

export default compose(fromPairs, map(item => [item.id, item]));
