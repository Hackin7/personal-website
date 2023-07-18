// src/routes/blog/[slug]/+page.server.ts

import { experiences } from '$lib/markdown_content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// get post with metadata
	const project = experiences.find((project) => slug === project.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
