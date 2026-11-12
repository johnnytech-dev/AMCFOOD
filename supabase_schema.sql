-- ============================================================
-- AMC FOODS — Supabase Database Schema
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- ── ORDERS TABLE ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id                BIGSERIAL PRIMARY KEY,
  order_id          TEXT NOT NULL UNIQUE,
  tracking_number   TEXT,
  status            TEXT DEFAULT 'confirmed',
  carrier           TEXT,
  estimated_arrival TEXT,

  -- Customer Info
  customer_name     TEXT,
  customer_email    TEXT,
  customer_address  TEXT,
  customer_zip      TEXT,

  -- Order Details (stored as JSON)
  items             JSONB NOT NULL DEFAULT '[]',
  frequency         TEXT DEFAULT 'one-time',

  -- Financials
  subtotal          NUMERIC(10, 2) DEFAULT 0,
  shipping          NUMERIC(10, 2) DEFAULT 0,
  discount          NUMERIC(10, 2) DEFAULT 0,
  total             NUMERIC(10, 2) DEFAULT 0,

  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookup by email and date
CREATE INDEX IF NOT EXISTS idx_orders_email      ON orders (customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders (created_at DESC);

-- ── SUBSCRIBERS TABLE ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscribers (
  id             BIGSERIAL PRIMARY KEY,
  email          TEXT NOT NULL UNIQUE,
  promo_sent     BOOLEAN DEFAULT FALSE,
  subscribed_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers (email);

-- ── ROW LEVEL SECURITY (RLS) ──────────────────────────────────
-- Enable RLS (best practice)
ALTER TABLE orders      ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anon (public API) to INSERT orders and subscribers
CREATE POLICY "Allow anon insert orders"
  ON orders FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anon insert subscribers"
  ON subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon to upsert subscribers (for newsletter re-signups)
CREATE POLICY "Allow anon upsert subscribers"
  ON subscribers FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anon to SELECT subscribers (for upsert conflict check)
CREATE POLICY "Allow anon select subscribers"
  ON subscribers FOR SELECT
  TO anon
  USING (true);

-- ── VERIFY TABLES EXIST ───────────────────────────────────────
-- After running above, verify with:
-- SELECT * FROM orders LIMIT 5;
-- SELECT * FROM subscribers LIMIT 5;
