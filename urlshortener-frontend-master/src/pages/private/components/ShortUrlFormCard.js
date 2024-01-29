import React from "react";

const ShortUrlFormCard = ({
  err,
  success,
  submitValue,
  longUrlState,
  setLongUrlState,
}) => {
  return (
    <div className="card p-4 m-3">
      <form onSubmit={submitValue}>
        <div className="mb-3">
          <label htmlFor="longUrl" className="form-label">
            LongUrl
          </label>
          <input
            id="longUrl"
            type="url"
            className="form-control"
            placeholder="type your long url here"
            value={longUrlState}
            onChange={(ev) => {
              setLongUrlState(ev.target.value);
            }}
          />
          {err && <div className="form-text text-danger">{err}</div>}
          {success && (
            <div className="form-text text-success">url is Valid</div>
          )}
        </div>

        <button className="btn btn-outline-secondary">Create Short Url</button>
      </form>
    </div>
  );
};

export default ShortUrlFormCard;
