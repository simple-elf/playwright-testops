import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

// new line
test('Авто сценарий 3 @allure.id:3', async ({ page }) => {
  await allure.owner("kostya");
  await allure.step("Авто шаг 1", async () => {});
  await allure.step("Авто шаг 2", async () => {});
});

test('Авто сценарий 1 @allure.id:1', async ({ page }) => {
  await allure.owner("kostya");
  await allure.step("Авто шаг 1", async () => {});
  await allure.step("Авто шаг 2", async () => {});
  await allure.step("Авто шаг 3", async () => {});
  await allure.step("Авто шаг 4", async () => {});
});
