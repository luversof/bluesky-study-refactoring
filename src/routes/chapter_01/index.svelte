<script>
	import { statement } from '$lib/chapter_01/function.js';
	import plays from '$lib/chapter_01/plays.json';
	import invoices from '$lib/chapter_01/invoices.json';

	let result = statement(invoices[0], plays);

	console.log('===== ', result);
</script>

<pre>
{result}
</pre>
