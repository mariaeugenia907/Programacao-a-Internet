import requests
import requests_cache   

from bs4 import BeautifulSoup

requests_cache.install_cache('banco')
page = requests.get('https://www.reddit.com/r/investimentos/')

# print(page.content)
if page.status_code == 200:
    soup = BeautifulSoup(page.text, 'html.parser')
# print(soup.prettify())
    links = soup.select('.SQnoC3ObvgnGjWt90zD9Z')
    print(links)
    for link in  links:
    #    fixed_html = h3.prettify()
       print(link.h3)
else:
        print ("erro ao realizar a requisção")    