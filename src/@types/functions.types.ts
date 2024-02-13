export type TAgent = {
	folder: string;
	description: string;
	userAgent: string;
	appCodename?: string;
	appName: string;
	appVersion: string;
	platform: string;
	vendor: string;
	vendorSub: string;
	browserName: string;
	browserMajor: string;
	browserVersion: string;
	deviceModel: string;
	deviceType: string;
	deviceVendor: string;
	engineName: string;
	engineVersion: string;
	osName: string;
	osVersion: string;
	cpuArchitecture: string;
};