import requests
from bs4 import BeautifulSoup

url = "https://www.who.int/countries/pak"

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
# print(soup)


# Using ID
div = soup.find("div", id="confirmedDeaths")
data_text = div.text.split()  # Remove leading and trailing whitespace
print(data_text)



confirmed_deaths = ""
for char in data_text:
    print(char)
    if char.isdigit():
        continue
#         confirmed_deaths += char

# confirmed_deaths = int(confirmed_deaths)
# print(confirmed_deaths)




# # Using class (replace "class_name" with the actual class attribute)
# div2 = soup.find("div", class_="lds-dual-ring")
# # print(div2)


# if div:
#     data = div.text.strip()  # Remove leading and trailing whitespace
# else:
#     print("Div not found!")
