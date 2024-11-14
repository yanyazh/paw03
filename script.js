(function () {
  // const cw1 = document.getElementById("cw1");
  // const cw2 = document.getElementById("cw2");
  // const cw3 = document.getElementById("cw3");
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

}());