export function getReadingTime(content: string): string {
	const wordsPerMinute = 200;
	const text = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
	const wordCount = text.split(/\s+/).length;
	const minutes = Math.ceil(wordCount / wordsPerMinute);
	return `${minutes} min read`;
}
