<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>A Few Pages for You</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Inter:wght@300;400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css" />
</head>

<body>

<main id="book">

  <!-- COVER -->
  <section class="page active">
    <p class="small">A few pages I wanted to leave with you.</p>
    <p class="signature">— Khushi</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Open</button>
    </div>
  </section>

  <!-- DATE + TIME -->
  <section class="page">
    <p class="date" id="dateText"></p>
    <p id="timeText"></p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Turn the page</button>
    </div>
  </section>

  <!-- REASONS INTRO -->
  <section class="page">
    <p class="section-title">Some reasons why I love you</p>
    <p class="section-sub">
      Not in any particular order.<br>
      Just the ones that come to mind.
    </p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Begin</button>
    </div>
  </section>

  <!-- REASONS -->
  <section class="page">
    <p>You always reply.<br>Even when you’re busy.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Next</button>
    </div>
  </section>

  <section class="page">
    <p>You stay calm when things get heated.<br>That is so rare.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Next</button>
    </div>
  </section>

  <section class="page">
    <p>You make the noise disappear.<br>That makes me feel safe.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Next</button>
    </div>
  </section>

  <section class="page">
    <p>You kiss me like I matter.<br>Even on the phone.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Next</button>
    </div>
  </section>

  <section class="page">
    <p>You are the smartest man I know.<br>I am so proud of you.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Next</button>
    </div>
  </section>

  <section class="page">
    <p>Loving you is easy.<br>Loving you is natural.</p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">Read slowly</button>
    </div>
  </section>

  <!-- MEMORY -->
  <section class="page memory">
    <p class="slow">
      I don’t write things like this lightly.<br><br>
      I choose you.<br>
      Again and again.<br><br>

      Until the poets run out of rhymes.<br>
      In other words, till the end of time.<br>
      You'll call me yours, I'll call you mine.<br><br>

      So, Mr. Aman Jindal,
    </p>
    <div class="nav">
      <button class="back" onclick="prevPage()">Back</button>
      <button onclick="nextPage()">One last thing</button>
    </div>
  </section>

  <!-- VALENTINE -->
  <section class="page" id="valentine-page">
    <p class="final">Will you be my Valentine?</p>
    <div class="choices">
      <button id="yesBtn">Yes</button>
      <button id="noBtn" class="soft">No</button>
    </div>
  </section>

  <!-- END -->
  <section class="page">
    <p class="end">I’m really glad it’s you.<br>I LOVE YOU!!</p>
  </section>

</main>

<script src="script.js"></script>
</body>
</html>
