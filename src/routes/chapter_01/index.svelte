<script>
	import { statement, htmlStatement } from '$lib/chapter_01/statement.js';
	import plays from '$lib/chapter_01/plays.json';
	import invoices from '$lib/chapter_01/invoices.json';

	let result = statement(invoices[0], plays);
	let htmlResult = htmlStatement(invoices[0], plays);

	console.log('===== ', result);
	console.log('===== ', htmlResult);
</script>

<pre>
{result}
</pre>

<br />
{@html htmlResult}
