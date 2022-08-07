import React from "react";
import styled from "styled-components";

const Tools = () => {
  return (
    <Main className="text-white flex flex-col md:flex-row text-center w-full sm:w-[60%]">
      <div className="md:-rotate-90 border-b-2 border-black py-[20px] px-[10px]">
        <p className="text-black font-bold">Tools</p>
      </div>
      <div className="flex flex-wrap px-[15px] py-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
          <path d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="7" fill="#39c1d7"></circle>
          <path d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"></path>
          <path
            fill="#39c1d7"
            d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"
          ></path>
          <path d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#bdbdbd"
            d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
          ></path>
          <path
            fill="#b71c1c"
            d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
          ></path>
          <path
            fill="#dd2c00"
            d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
          ></path>
          <path
            fill="#bdbdbd"
            d="M24 5.996L24 15.504 32.578 34 36.987 34z"
          ></path>
          <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path>
          <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
          <path fill="#eee" d="M18 24H24V28H18z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <polygon
            fill="#81c784"
            points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
          ></polygon>
          <polygon
            fill="#455a64"
            points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
          ></polygon>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <polygon
            fill="#eceff1"
            points="24,4 7,14 7,34 24,44 41,34 41,14"
          ></polygon>
          <polygon
            fill="#0277bd"
            points="23.5,24.5 23.5,33.5 15,29 15,19.5"
          ></polygon>
          <polygon
            fill="#0277bd"
            points="24.5,24.5 24.5,33.5 33,29 33,19.5"
          ></polygon>
          <polygon
            fill="#0277bd"
            points="24,23.5 15.5,18.5 24,14 32.5,18.5"
          ></polygon>
          <g>
            <polygon
              fill="#81d4fa"
              points="23.5,7 23.5,13 14.5,18 9.5,15"
            ></polygon>
            <polygon
              fill="#81d4fa"
              points="23.5,41 23.5,35 14.5,30 9.5,33"
            ></polygon>
            <polygon fill="#81d4fa" points="14,19 9,16 9,32 14,29"></polygon>
            <polygon
              fill="#81d4fa"
              points="24.5,7 24.5,13 33.5,18 38.5,15"
            ></polygon>
            <polygon
              fill="#81d4fa"
              points="24.5,41 24.5,35 33.5,30 38.5,33"
            ></polygon>
            <polygon fill="#81d4fa" points="34,19 39,16 39,32 34,29"></polygon>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#f06292"
            d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 16 16"
        >
          <path d="M 8 1.0234375 C 7.736875 1.0234375 7.4742344 1.0924687 7.2402344 1.2304688 L 2.7402344 3.8789062 C 2.2832344 4.1469063 2 4.642875 2 5.171875 L 2 11.005859 C 2 11.554859 2.29925 12.059266 2.78125 12.322266 L 4.2558594 13.126953 C 4.4828594 13.250953 4.7286094 13.310547 4.9746094 13.310547 C 5.2386094 13.310547 5.4992812 13.239609 5.7382812 13.099609 C 6.1982812 12.826609 6.4726562 12.344594 6.4726562 11.808594 L 6.4726562 5.4648438 L 5.4726562 5.4648438 L 5.4726562 11.808594 C 5.4726562 12.065594 5.3025156 12.195281 5.2285156 12.238281 C 5.1555156 12.281281 4.959375 12.371047 4.734375 12.248047 L 3.2617188 11.445312 C 3.1007187 11.357312 3 11.188859 3 11.005859 L 3 5.171875 C 3 4.995875 3.0940938 4.8302344 3.2460938 4.7402344 L 7.7460938 2.0917969 C 7.9020937 1.9997969 8.0979062 2.0007969 8.2539062 2.0917969 L 12.753906 4.7402344 C 12.904906 4.8302344 13 4.995875 13 5.171875 L 13 11.009766 C 13 11.189766 12.900234 11.359219 12.740234 11.449219 L 8.2402344 13.900391 C 8.0902344 13.980391 7.9097656 13.980391 7.7597656 13.900391 L 6.8808594 13.419922 C 6.7108594 13.629922 6.5 13.810937 6.25 13.960938 C 6.17 14.010938 6.0897656 14.050078 6.0097656 14.080078 L 7.2792969 14.779297 C 7.5092969 14.899297 7.75 14.960938 8 14.960938 C 8.25 14.960938 8.4907031 14.899297 8.7207031 14.779297 L 13.220703 12.320312 C 13.700703 12.060313 14 11.559766 14 11.009766 L 14 5.171875 C 14 4.642875 13.717719 4.1469062 13.261719 3.8789062 L 8.7617188 1.2304688 C 8.5272187 1.0924688 8.263125 1.0234375 8 1.0234375 z M 9.4511719 5.3183594 C 7.8711719 5.3183594 7.0703125 5.8690781 7.0703125 6.9550781 C 7.0703125 8.1850781 8.4869687 8.3680781 9.1679688 8.4550781 C 9.2659688 8.4680781 9.352875 8.4791875 9.421875 8.4921875 L 9.7207031 8.5449219 C 10.760703 8.7189219 11 8.836875 11 9.171875 C 11 9.333875 10.999172 9.8242188 9.4511719 9.8242188 C 8.1381719 9.8242188 7.8691406 9.4346094 7.8691406 8.8496094 L 6.8691406 8.8496094 C 6.8691406 9.7516094 7.3171719 10.824219 9.4511719 10.824219 C 11.557172 10.824219 12 9.925875 12 9.171875 C 12 7.913875 10.777719 7.7076406 9.8867188 7.5566406 L 9.5996094 7.5078125 C 9.5166094 7.4928125 9.4119219 7.4788438 9.2949219 7.4648438 C 8.6589219 7.3828438 8.0703125 7.2650312 8.0703125 6.9570312 C 8.0703125 6.7340313 8.0691719 6.3193594 9.4511719 6.3183594 C 10.370172 6.3183594 10.837891 6.6207969 10.837891 7.2167969 L 11.837891 7.2167969 C 11.837891 6.2997969 11.209172 5.3183594 9.4511719 5.3183594 z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 50 50"
        >
          <path d="M 25 12 C 18.507813 12 12.621094 13.359375 8.273438 15.628906 C 3.925781 17.898438 1 21.167969 1 25 C 1 28.832031 3.925781 32.101563 8.273438 34.371094 C 12.621094 36.640625 18.507813 38 25 38 C 31.492188 38 37.378906 36.640625 41.726563 34.371094 C 46.074219 32.101563 49 28.832031 49 25 C 49 21.167969 46.074219 17.898438 41.726563 15.628906 C 37.378906 13.359375 31.492188 12 25 12 Z M 25 14 C 31.210938 14 36.824219 15.324219 40.800781 17.402344 C 44.777344 19.476563 47 22.203125 47 25 C 47 27.796875 44.777344 30.523438 40.800781 32.597656 C 36.824219 34.675781 31.210938 36 25 36 C 18.789063 36 13.175781 34.675781 9.199219 32.597656 C 5.222656 30.523438 3 27.796875 3 25 C 3 22.203125 5.222656 19.476563 9.199219 17.402344 C 13.175781 15.324219 18.789063 14 25 14 Z M 22.507813 16 L 20 28 L 22.625 28 L 23.890625 22 L 25.988281 22 C 26.65625 22 27.101563 22.109375 27.308594 22.332031 C 27.511719 22.554688 27.554688 22.976563 27.4375 23.582031 L 26.480469 28 L 29.144531 28 L 30.183594 23.222656 C 30.40625 22.078125 30.238281 21.238281 29.683594 20.726563 C 29.117188 20.207031 28.121094 20 26.636719 20 L 24.296875 20 L 25.128906 16 Z M 11 20 L 8.972656 31 L 11.617188 31 L 12.144531 28 L 13.792969 28 C 17.238281 28 19.113281 27.203125 19.8125 24.246094 C 20.414063 21.703125 18.875 20 16.332031 20 Z M 32 20 L 29.972656 31 L 32.617188 31 L 33.144531 28 L 34.792969 28 C 38.238281 28 40.113281 27.203125 40.8125 24.246094 C 41.414063 21.703125 39.875 20 37.332031 20 Z M 13.273438 22 L 15.332031 22 C 17.042969 22 17.402344 22.769531 17.3125 23.625 C 17.082031 25.832031 15.707031 26 14.230469 26 L 12.515625 26 Z M 34.273438 22 L 36.332031 22 C 38.042969 22 38.402344 22.769531 38.3125 23.625 C 38.082031 25.832031 36.707031 26 35.230469 26 L 33.515625 26 Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#7cb342"
            d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"
          ></path>
          <path
            fill="#558b2f"
            d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z"
          ></path>
          <path
            fill="#fff"
            d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path
            fill="#FFF"
            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
          ></path>
          <path
            fill="#EEE"
            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
          <polygon
            fill="#fff"
            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
          ></polygon>
          <path
            fill="#fff"
            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#7e57c2"
            d="M7,41L7,7c0-2.209,1.791-4,4-4h26c2.209,0,4,1.785,4,3.994c0,8.018,0,25.991,0,34.01C41,43.214,39.209,45,37,45H11C8.791,45,7,43.209,7,41z"
          ></path>
          <path
            fill="#fff"
            d="M28.292,39.221v-16.68c0,0,1.085-3.991-13.364,1.633c-0.026,0.071-0.026-15.424-0.026-15.424l4.721-0.029v9.928c0,0,13.218-5.206,13.218,3.948v16.623L28.292,39.221L28.292,39.221L28.292,39.221z M30.982,14.73h-5.007c1.802-2.204,3.434-5.98,3.434-5.98h5.178C34.586,8.751,33.7,11.211,30.982,14.73L30.982,14.73L30.982,14.73z M14.987,39.192v-9.498l4.75,4.75L14.987,39.192L14.987,39.192z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#00acc1"
            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ff4081"
            d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z"
          ></path>
          <circle cx="24.5" cy="5.5" r="3.5" fill="#ff4081"></circle>
          <circle cx="24.5" cy="43.5" r="3.5" fill="#ff4081"></circle>
          <circle cx="8.5" cy="33.5" r="3.5" fill="#ff4081"></circle>
          <circle cx="40.5" cy="33.5" r="3.5" fill="#ff4081"></circle>
          <circle cx="8.5" cy="15.5" r="3.5" fill="#ff4081"></circle>
          <circle cx="40.5" cy="15.5" r="3.5" fill="#ff4081"></circle>
          <path
            fill="#ff4081"
            d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#5d4037"
            d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
          ></path>
          <path
            fill="#4caf50"
            d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
          ></path>
          <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
          <path
            fill="#4caf50"
            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
          ></path>
          <path
            fill="#81c784"
            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path fill="#e53935" d="M24 43L16 20 32 20z"></path>
          <path fill="#ff7043" d="M24 43L42 20 32 20z"></path>
          <path fill="#e53935" d="M37 5L42 20 32 20z"></path>
          <path fill="#ffa726" d="M24 43L42 20 45 28z"></path>
          <path fill="#ff7043" d="M24 43L6 20 16 20z"></path>
          <path fill="#e53935" d="M11 5L6 20 16 20z"></path>
          <path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 30 30"
        >
          {" "}
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#2196F3"
            d="M36,32.7L35,39c0,2.2-5.1,4-11,4s-11-1.8-11-4l-1-6.3c-0.1-0.4,0.3-0.8,0.8-0.6C15.8,33.4,20,34,24,34s8.2-0.6,11.2-1.9C35.6,31.9,36.1,32.3,36,32.7z M41,10c0,0.2,0,0.3-0.1,0.5L38,27c0,2.8-6.2,5-13.9,5C16.4,32,10,29.8,10,27L7.1,10.5C7,10.3,7,10.2,7,10c0-2.8,7.6-5,17-5S41,7.2,41,10z M29,23c0-2.8-2.2-5-5-5s-5,2.2-5,5s2.2,5,5,5S29,25.8,29,23z M35.8,10c0-1.7-5.3-3-11.8-3s-11.8,1.3-11.8,3s5.3,3,11.8,3S35.8,11.7,35.8,10z M24,25c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S22.9,25,24,25z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="34"
          height="34"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0277BD"
            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
          ></path>
          <path
            fill="#FFC107"
            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
          ></path>
        </svg>
      </div>
    </Main>
  );
};

const Main = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  opacity: 1;
  margin: 10px 0px;
`;

export default Tools;