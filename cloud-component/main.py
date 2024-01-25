import requests
from bs4 import BeautifulSoup
import pandas as pd
import json



# def scrape_data(country,url):


#     response = requests.get(url)

#     if response.status_code == 200:
#         data = BeautifulSoup(response.text, 'html.parser')
#         print(data)
#         # print(type(data))
        
#         # if data:
#         #     for country_data in data:

#         #         print(f"Updated: {country_data['updated']}")
#         #         print(f"Country: {country_data['country']}")
#         #         print(f"CountryInfo: {country_data['countryInfo']}")
#         #         print(f"Cases: {country_data['cases']}")

#         #         print(f"Today Cases: {country_data['todayCases']}")
#         #         print(f"Deaths: {country_data['deaths']}")
#         #         print(f"Today Deaths: {country_data['todayDeaths']}")
#         #         print(f"Total Recovered: {country_data['recovered']}")
                
#         #         print(f"Today Recovered: {country_data['todayRecovered']}")
#         #         print(f"Active: {country_data['active']}")
#         #         print(f"Critical: {country_data['critical']}")
#         #         print(f"Tests: {country_data['tests']}")
                
                
#         #         print(f"Today Recovered: {country_data['todayRecovered']}")
#         #         print(f"Active: {country_data['active']}")
#         #         print(f"Critical: {country_data['critical']}")
#         #         print(f"Population: {country_data['population']}")
                 
#         #         print(f"Continent: {country_data['continent']}")
               
                
                
                
                
#         #         print("------------------------------")
#         # else:
#         #     print("No data fetched.")
                
        
#     return('Done')


import requests
import pandas as pd

def scrape_disease_data(country, url):
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()

        if data:
            # Create a list to store data for each country
            country_data_list = []

            for country_data in data:
                if country_data["country"] == "Afghanistan":
                    country_row = {
                        "Updated": country_data["updated"],
                        "Country": country_data["country"],
                        "Cases": country_data["cases"],
                        "Today Cases": country_data["todayCases"],
                        "Deaths": country_data["deaths"],
                        "Today Deaths": country_data["todayDeaths"],
                        "Total Recovered": country_data["recovered"],
                        "Today Recovered": country_data["todayRecovered"],
                        "Active": country_data["active"],
                        "Critical": country_data["critical"],
                        "Tests": country_data["tests"],
                        "Population": country_data["population"],
                        "Continent": country_data["continent"],
                    }
                    country_data_list.append(country_row)

            # Create a DataFrame from the list of country data
            df = pd.DataFrame(country_data_list)

            # Save the DataFrame to a CSV file (you can use other formats if needed)
            df.to_csv(f"{country}_disease_data.csv", index=False)

            print(f"Data for {country} written to {country}_disease_data.csv")

        else:
            print("No data fetched.")

    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")

    return "Done"

# Example usage:
country_input = "Afghanistan"
url = 'https://disease.sh/v3/covid-19/countries'
result = scrape_disease_data(country_input, url)
print(result)





# country_input = "All"
# urll = 'https://data.who.int/countries/586'
# result = scrape_data(country_input,urll)
# # print(result)
