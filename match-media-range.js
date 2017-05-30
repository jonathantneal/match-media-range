// native match media
const nativeMatchMedia = window.matchMedia;

// match media polyfilled to support min-max
export default function matchMedia(query) {
	return nativeMatchMedia(
		String(query).replace(
			/(?:([-+]?[0-9]*\.?[0-9]+)(%|\w+)\s*(<|>)(=)?(\s*))?(aspect-ratio|color|height|monochrome|resolution|width)(?:\s*(<|>)(=)?(\s*)([-+]?[0-9]*\.?[0-9]+)(%|\w+))?/g,
			($0, beforeFloat, beforeUnit, beforeGtLt, beforeEqual, beforeSpace, property, afterGtLt, afterEqual, afterSpace, afterFloat, afterUnit) => { // eslint-disable-line max-params
				if (!beforeFloat && !afterFloat) {
					return $0;
				}

				let transpiledQuery = '';

				if (beforeFloat) {
					transpiledQuery += (beforeGtLt === '<' ? 'min' : 'max') + '-' + property + ':' + beforeSpace + (beforeEqual ? beforeFloat : parseFloat(beforeFloat) + (beforeGtLt === '<' ? 1 : -1)) + beforeUnit;
				}

				if (beforeUnit && afterFloat) {
					transpiledQuery += ') and (';
				}

				if (afterFloat) {
					transpiledQuery += (afterGtLt === '<' ? 'max' : 'min') + '-' + property + ':' + afterSpace + (afterEqual ? afterFloat : parseFloat(afterFloat) + (afterGtLt === '<' ? -1 : 1)) + afterUnit;
				}

				return transpiledQuery;
			}
		)
	);
}
