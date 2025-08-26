import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('главная страница содержит заголовок @allure.id:1', async ({ page }) => {
  await allure.owner("kostya");
  await allure.step("Ручной шаг 1", async () => {});
  await allure.step("Ручной шаг 2", async () => {});
  await allure.step("Ручной шаг 3", async () => {});
  await allure.step("Ручной шаг 4", async () => {});
});
