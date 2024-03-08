export const toQueryParams = (params: any): string => {
	return new URLSearchParams(params).toString();
};
