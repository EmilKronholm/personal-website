async function voteOption(option) {
  const baseUrl = window.location.origin;
  const voteMap = {
      perfect: 0,
      good: 1,
      okay: 2,
      badButUnderstand: 3,
      terrible: 4,
      horrible: 5
  };

  if (!(option in voteMap)) {
      alert("Felaktigt alternativ!");
      return;
  }

  const voteID = voteMap[option];
  const uri = `${baseUrl}/goiboet/vote/${voteID}`;

  try {
      const response = await fetch(uri, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vote: option })
      });

      if (!response.ok) throw new Error("Något gick fel vid röstningen.");

      window.location.href = `${baseUrl}/goiboet-success`

  } catch (error) {
      console.error("Error:", error);
      alert("Något gick fel! Försök igen senare, goiboet tror på dig!");
  }
}
