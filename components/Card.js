import React from 'react';

function Card({ s }) {
  return (
    <div class="rounded-md overflow-hidden shadow m-1	">
      <div>
        <img class=" h-44 min-h-full w-96  object-cover	 " src={s.img}></img>
      </div>
      <div>
        <p class="font-body text-sm	 font-bold	 mb-2 ">{s.city}</p>
      </div>
      <div>
        <p class="font-body text-gray-900 text-sm	 ">{s.country}</p>
      </div>
    </div>
  );
}

export default Card;
