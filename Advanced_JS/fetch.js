//Some more interesting facts about fetch api
/*A fetch promise only rejects when a network error is occcurec(which usually happens if there is a permission issue or similar).
A fetch() promise does not reject on HTTP errors(404 etc.). Instead, a then()
handler must check the Respone.ok and Response.status properties*/

