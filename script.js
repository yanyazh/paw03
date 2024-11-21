(function () {
  const answer = document.getElementById("answer");

  function showLoading() {
    document.getElementById("loadingModal").style.display = 'block';
  }
  
  function hideLoading() {
    // Simulate loading time by adding a delay (e.g., 3 seconds)
    setTimeout(() => {
      document.getElementById("loadingModal").style.display = 'none';
    }, 500); // 3000 milliseconds = 3 seconds
  }

  document.getElementById("Cm3_1").addEventListener("click", function () {
    showLoading(); // Pokaż okno "Loading..."
  
    fetch("https://restcountries.com/v3.1/capital/Warsaw")
      .then((response) => response.json())
      .then((posts) => {
        hideLoading(); // Ukryj okno "Loading..."
        document.getElementById("answer").innerHTML = '';
        console.log(posts);
  
        posts.forEach((post) => {
          const postContainer = document.createElement("div");
          postContainer.classList.add("post");
  
          const name = document.createElement("h3");
          name.textContent = post.name.common;
  
          const capital = document.createElement("p");
          capital.textContent = post.capital;

          const population = document.createElement("p");
          population.textContent = post.population;

          const region = document.createElement("p");
          region.textContent = post.region;

          const subregion = document.createElement("p");
          subregion.textContent = post.subregion;
  
          postContainer.appendChild(name);
          postContainer.appendChild(capital);
          postContainer.appendChild(population);
          postContainer.appendChild(region);
          postContainer.appendChild(subregion);
  
          document.getElementById("answer").appendChild(postContainer);
        });
      })
      .catch((error) => {
        hideLoading(); // Ukryj okno w przypadku błędu
        document.getElementById("answer").innerHTML = 'Error loading posts. Please try again later.';
        console.error("Error fetching posts:", error);
      });
  });
  

  document.getElementById("Cm3_2").addEventListener("click", function () {
    showLoading(); // Show "Loading..." modal

    // Replace <YOUR_API_TOKEN> with your actual NOAA API token
    const token = "zPRIHeyTFWiivikhYLEVtGYIAhyNpnrq";
    const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/stations";

    fetch(url, {
        method: "GET",
        headers: {
            "token": token
        }
    })
    .then((response) => response.json())
    .then((data) => {
        hideLoading(); // Hide loading modal
        document.getElementById("answer").innerHTML = '';

        // Create a table element to display the station data
        const table = document.createElement("table");
        table.classList.add("station-table");

        // Create the table headers
        const headerRow = document.createElement("tr");
        const headers = ["Station ID", "Name", "State", "Latitude", "Longitude"];
        headers.forEach((headerText) => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Loop through each station and create a table row
        data.results.forEach((station) => {
            const row = document.createElement("tr");

            const stationId = document.createElement("td");
            stationId.textContent = station.id;
            row.appendChild(stationId);

            const name = document.createElement("td");
            name.textContent = station.name || "N/A";
            row.appendChild(name);

            const state = document.createElement("td");
            state.textContent = station.state || "N/A";
            row.appendChild(state);

            const latitude = document.createElement("td");
            latitude.textContent = station.latitude || "N/A";
            row.appendChild(latitude);

            const longitude = document.createElement("td");
            longitude.textContent = station.longitude || "N/A";
            row.appendChild(longitude);

            // Append the row to the table
            table.appendChild(row);
        });

        // Append the table to the "answer" div
        document.getElementById("answer").appendChild(table);
    })
    .catch((error) => {
        hideLoading(); // Hide loading modal in case of an error
        document.getElementById("answer").innerHTML = 'Error loading stations. Please try again later.';
        console.error("Error fetching station data:", error);
    });
});


document.getElementById("getLocations").addEventListener("click", function () {
  showLoading(); // Show loading modal

  const token = "zPRIHeyTFWiivikhYLEVtGYIAhyNpnrq"; // Replace with your actual NOAA API token
  const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/locations";

  fetch(url, {
      method: "GET",
      headers: {
          "token": token
      }
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => {
      hideLoading(); // Hide loading modal
      console.log(data); // Display location data in the console or process as needed
      document.getElementById("answer").innerHTML = JSON.stringify(data, null, 2); // Display data
  })
  .catch((error) => {
      hideLoading(); // Hide loading in case of error
      document.getElementById("answer").innerHTML = 'Error loading locations. Please try again later.';
      console.error("Error fetching location data:", error);
  });
});


  

document.getElementById("Cm3_22").addEventListener("click", function () {
  showLoading(); // Show "Loading..." modal

  // Replace <YOUR_API_TOKEN> with your actual NOAA API token
  const token = "zPRIHeyTFWiivikhYLEVtGYIAhyNpnrq";
  const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/locations";

  fetch(url, {
      method: "GET",
      headers: {
          "token": token
      }
  })
  .then((response) => response.json())
  .then((data) => {
      hideLoading(); // Hide loading modal
      document.getElementById("answer").innerHTML = '';

      // Create a table element to display the station data
      const table = document.createElement("table");
      table.classList.add("station-table");

      // Create the table headers
      const headerRow = document.createElement("tr");
      const headers = ["Station ID", "Name", "Data Coverage", "Max Date", "Min Date"];
      headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Loop through each station and create a table row
      data.results.forEach((station) => {
          const row = document.createElement("tr");

          const stationId = document.createElement("td");
          stationId.textContent = station.id;
          row.appendChild(stationId);

          const name = document.createElement("td");
          name.textContent = station.name || "N/A";
          row.appendChild(name);

          const datacoverage = document.createElement("td");
          datacoverage.textContent = station.datacoverage || "N/A";
          row.appendChild(datacoverage);

          const maxdate = document.createElement("td");
          maxdate.textContent = station.maxdate || "N/A";
          row.appendChild(maxdate);

          const mindate = document.createElement("td");
          mindate.textContent = station.mindate || "N/A";
          row.appendChild(mindate);

          // Append the row to the table
          table.appendChild(row);
      });

      // Append the table to the "answer" div
      document.getElementById("answer").appendChild(table);
  })
  .catch((error) => {
      hideLoading(); // Hide loading modal in case of an error
      document.getElementById("answer").innerHTML = 'Error loading stations. Please try again later.';
      console.error("Error fetching station data:", error);
  });
});

document.getElementById("Cm3_23").addEventListener("click", function () {
  showLoading(); // Pokaż okno "Loading..."

  // Pobierz parametry od użytkownika
  const datasetId = document.getElementById("datasetId").value; // np. GHCND
  const locationId = document.getElementById("locationId").value; // np. ZIP:28801
  const startDate = document.getElementById("startDate").value; // np. 2010-05-01
  const endDate = document.getElementById("endDate").value; // np. 2010-05-01

  // klucz API NOAA
  const token = "zPRIHeyTFWiivikhYLEVtGYIAhyNpnrq";
  const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=${datasetId}&locationid=${locationId}&startdate=${startDate}&enddate=${endDate}`;

  fetch(url, {
      method: "GET",
      headers: {
          "token": token
      }
  })
  .then((response) => response.json())
  .then((data) => {
      hideLoading(); // Ukryj okno "Loading..."
      document.getElementById("answer").innerHTML = '';

      // Stwórz tabelę
      const table = document.createElement("table");
      table.classList.add("data-table");

      // Nagłówki tabeli
      const headerRow = document.createElement("tr");
      const headers = ["Date", "Data Type", "Value"];
      headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Przetwarzaj dane i wypełniaj wiersze tabeli
      if (data.results && data.results.length > 0) {
          data.results.forEach((entry) => {
              const row = document.createElement("tr");

              const date = document.createElement("td");
              date.textContent = entry.date || "N/A";
              row.appendChild(date);

              const dataType = document.createElement("td");
              dataType.textContent = entry.datatype || "N/A";
              row.appendChild(dataType);

              const value = document.createElement("td");
              value.textContent = entry.value || "N/A";
              row.appendChild(value);

              table.appendChild(row);
          });
      } else {
          const noDataRow = document.createElement("tr");
          const noDataCell = document.createElement("td");
          noDataCell.setAttribute("colspan", 3);
          noDataCell.textContent = "No data available for the given parameters.";
          noDataRow.appendChild(noDataCell);
          table.appendChild(noDataRow);
      }

      // Wyświetl tabelę w "answer"
      document.getElementById("answer").appendChild(table);
  })
  .catch((error) => {
      hideLoading(); // Ukryj okno w przypadku błędu
      document.getElementById("answer").innerHTML = 'Error fetching data. Please check your parameters and try again.';
      console.error("Error fetching data:", error);
  });
});


document.getElementById("Cm3_31").addEventListener("click", function () {
  const apiKey = "9nkVm5hVFaWVPUbqd6jKyZ3ukMGEC81l"; // klucz API
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`;

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          document.getElementById("gifContainer").innerHTML = ''; // Wyczyść wcześniej wyświetlone dane

          const img = document.createElement("img");
          img.src = data.data.images.original.url; // URL do losowego GIFa
          img.alt = "Random GIF";

          document.getElementById("gifContainer").appendChild(img);
      })
      .catch((error) => {
          console.error("Error fetching random GIF:", error);
          document.getElementById("gifContainer").innerHTML = 'Error fetching GIF.';
      });
});

document.getElementById("Cm3_32").addEventListener("click", function () {
  const apiKey = "9nkVm5hVFaWVPUbqd6jKyZ3ukMGEC81l"; // klucz API
  const query = document.getElementById("searchQuery").value; // Pobierz frazę wyszukiwania
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=9&offset=0&rating=g`;

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          document.getElementById("gifContainer").innerHTML = ''; // Wyczyść wcześniej wyświetlone dane

          data.data.forEach((gif) => {
              const img = document.createElement("img");
              img.src = gif.images.fixed_height.url; // URL do znalezionego GIFa
              img.alt = gif.title;

              document.getElementById("gifContainer").appendChild(img);
          });
      })
      .catch((error) => {
          console.error("Error searching GIFs:", error);
          document.getElementById("gifContainer").innerHTML = 'Error searching GIFs.';
      });
});

let currentPage = 0;

document.getElementById("nextPage").addEventListener("click", function () {
    currentPage += 1;
    searchGifsWithPagination(currentPage);
});

document.getElementById("prevPage").addEventListener("click", function () {
    if (currentPage > 0) {
        currentPage -= 1;
        searchGifsWithPagination(currentPage);
    }
});

function searchGifsWithPagination(page) {
    const apiKey = "9nkVm5hVFaWVPUbqd6jKyZ3ukMGEC81l"; // klucz API
    const query = document.getElementById("searchQuery").value; // Pobierz frazę wyszukiwania
    const limit = 9; // Liczba wyników na stronę
    const offset = page * limit; // Oblicz przesunięcie na podstawie strony
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("gifContainer").innerHTML = ''; // Wyczyść wcześniej wyświetlone dane

            data.data.forEach((gif) => {
                const img = document.createElement("img");
                img.src = gif.images.fixed_height.url; // URL do znalezionego GIFa
                img.alt = gif.title;

                document.getElementById("gifContainer").appendChild(img);
            });
        })
        .catch((error) => {
            console.error("Error fetching GIFs with pagination:", error);
            document.getElementById("gifContainer").innerHTML = 'Error fetching GIFs.';
        });
}


}());