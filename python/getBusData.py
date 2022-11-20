import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup


def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    driver.implicitly_wait(10)
    return driver

def getData(bus_name, bus_id):
    drive = set_chrome_driver()

    drive.get(f'https://businfo.daegu.go.kr:8095/dbms_web/map?searchText={bus_name}&wincId={bus_id}')
    drive.find_element(By.CSS_SELECTOR, "#selectRoute0 > div > a > div > h6")

    html = drive.page_source
    bus = BeautifulSoup(html, 'html.parser')

    bus = bus.select("#selectRouteList ul li")
    bus_filter = []
    bus_data = []


    for b in bus:
        if b.h6 != None:
            bus_info_dic = {"name" : "", "location" : [], "before" : [], "min" : []}
            bus_info_dic["name"] = b.find('h6', class_='mb-0').text

            bus_info = b.find_all('li', class_='d-flex') # 이름 외에 정보를 가져옴
            for bi in bus_info:
                loc = bi.select("img + span + div div")[0].text # 위치를 가져옴
                bef = bi.find('small', class_='text-right').text # 현재 위치에서 얼마나 떨어있는지 가져옴
                mi = bi.find('span', class_='text-right').text # 현재 위치에서 몇분 남았는지 가져옴
                
                bus_info_dic["location"].append(loc)
                bus_info_dic["before"].append(bef)
                bus_info_dic["min"].append(mi)

            bus_data.append(bus_info_dic)

    bus_data_to_json = json.dumps(bus_data, indent=4, ensure_ascii = False)
    drive.quit()
    return bus_data_to_json

