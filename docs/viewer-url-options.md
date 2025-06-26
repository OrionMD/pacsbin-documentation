# Viewer URL options

The display of the Pacsbin viewer can be customized using a variety of URL query
string opions. This is useful when embedding the viewer in other web pages or
applications.

## Viewer display options

```json
{
	// Hide the viewer header bar
	header: false,

	// Hide the left side case navigation drawer
	caseNavigation: false,

	// Hide title(s) of case(s).
	titles: false,

	// Hide case metadata (findings, discussion, diagnosis, etc).
	caseData: false, // OR
	notes: false, // for backwards compatibility

	// Hide series drawer/selector.
	seriesList: false,

	// Hide the toolbar altogether.
	toolbar: false,

	// Which toolbar buttons to display. By default, full toolbar or abbreviated
	// toolbars depending on screen size. Set tool name and true|false to override
	// default and force hidden or visible.
	// NOTE: Not yet implemented
	// tools: {
	// 	scroll: true,
	// 	wwwc: false,
	// 	annotations: false,
	// 	...
	// },

	// Whether to display annotations.
	annotations: boolean, // OR
	an: boolean // for backwards compatibility

	// Whether to display metadata overlay.
	overlay: boolean,
}
```

## Study bookmark options

```json
{
	// Whether to display annotations.
	an: boolean

	// Viewport layout defined as rows x columns.
	layout: '2x1',

	// Window width by viewport (1-16).
	"ww:1": 40,
	"ww:2": 1600,
	...

	// Window center by viewport (1-16).
	"ww:1": 80,
	"ww:2": 200,
	...

	// Series to load by viewport. Series may be defined by the unique ID
	// of the series (preferred), or by an integer. Using an integer means the
	// series may change if they are reordered.
	"s:1": "stringIdOfSeries" || 1,
	"s:2": "stringIdOfSeries" || 5,
	...

	// Image of the series to load by viewport. Image may be defined by the unique ID
	// of the image (preferred), or by an integer. Using an integer means the
	// image may change if some images are deleted from the series.
	"i:1": "stringIdOfImage" || 1,
	"i:2": "stringIdOfImage" || 30,
	...

	// Image scale by viewport.
	"scale:1": 1.75,
	"scale:2": 0.9,
	...

	// Image translation by viewport. Comma separated floating point numbers
	// representing x,y image pan in pixels, ex: 49.6,-35.9
	"translation:1": '0,0',
	"translation:2": '50,-20',
	...
}
```
