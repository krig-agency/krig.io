import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout);

	head.script.push({
		src: "https://www.instagram.com/embed.js",
		async: true
	});
}
