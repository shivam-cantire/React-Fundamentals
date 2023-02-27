import IAuthorId from './i-authorId';
export default interface ICourseInfo {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: any;
	authors: any;
}
