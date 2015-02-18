function f()
{
	var url = document.location + '';
	if (url.substring(url.length, url.length - 1) == "#") {
		url = url.substring(0, url.length - 1);
	}
	if (url.match("#"))
	url = url.split("#")[0];

	var url2;
	if (url2.match(url))
	url2 = url2.split(url)[0];
	
	if (url.match("(a+)*"))
		url = url.split("((afb)*)+!")[0];
	
	if (url.match("((afb)*)+!"))
		url = url.split("(a+)*")[0];

	var url3 = url.replace("((afb)*)+!", "dsd");
	
	url2 = document.location;
	if (url2.match(url))
	url2 = url2.split(url)[0];
}