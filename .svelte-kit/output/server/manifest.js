export const manifest = {
	appDir: "internal",
	assets: new Set([".DS_Store",".nojekyll","favicon.png","pictures/banner.jpg","pictures/elon.jpeg","pictures/logo_economics.png","pictures/logo_political.png","pictures/logo_sciences.png","pictures/logo_ugent.png","pictures/neil.jpeg","pictures/train1.jpg","pictures/train1_old.jpg","pictures/train2.jpg","pictures/train3.jpg","pictures/train3_old.jpg"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
		entry: {"file":"start-7396e05b.js","js":["start-7396e05b.js","chunks/index-891b74ed.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			}
		]
	}
};
