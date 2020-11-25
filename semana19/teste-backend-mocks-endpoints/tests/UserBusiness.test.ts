import { UserBusiness } from "../src/business/UserBusiness"
import { User, UserRole } from "../src/model/User"


describe("Signup", () => {
   const idGenerator = { generate: jest.fn() } as any
   const hashGenerator = { hash: jest.fn() } as any
   const tokenGenerator = { generate: jest.fn() } as any
   const userDatabase = { createUser: jest.fn() } as any

   const userBusiness: UserBusiness = new UserBusiness(
      idGenerator,
      hashGenerator,
      tokenGenerator,
      userDatabase
   )

   test("Error when 'name' is empty", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "",
            "alice@lbn.com",
            "123456",
            "ADMIN"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'email' is empty", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "",
            "123456",
            "ADMIN"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'password' is empty", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "alice@lbn.com",
            "",
            "ADMIN"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'role' is empty", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "alice@lbn.com",
            "123456",
            ""
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })

   test("Error when 'email' is invalid", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "alicelbn.com",
            "123456",
            "ADMIN"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Invalid email")
      }
   })

   test("Error when 'password' is invalid", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "alice@lbn.com",
            "123",
            "ADMIN"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Invalid password")
      }
   })

   test("Error when 'role' is invalid", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Alice",
            "alice@lbn.com",
            "123456",
            "ADMINISTRADOR"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid user role")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Success case", async () => {
      expect.assertions(1)

      try {
         const result = await userBusiness.signup(
            "Alice",
            "alice@lbn.com",
            "123456",
            "ADMIN"
         )

         expect(result.accessToken).toBeDefined()
      } catch (error) {

      }
   })
})

describe("Login", () => {
   const idGenerator = {} as any
   const hashGenerator = {
      compareHash: jest.fn(
         () => false
      )
   } as any
   const tokenGenerator = { generate: jest.fn() } as any
   const userDatabase = {
      getUserByEmail: jest.fn(
         () => undefined
      )
   } as any

   const userBusiness: UserBusiness = new UserBusiness(
      idGenerator,
      hashGenerator,
      tokenGenerator,
      userDatabase
   )
   test("Error when 'email' is empty", async () => {
      expect.assertions(2)
      try {

         await userBusiness.login(
            "",
            "123456"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Error when 'password' is empty", async () => {
      expect.assertions(2)
      try {

         await userBusiness.login(
            "alice@lbn.com",
            ""
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Error when 'email' is invalid", async () => {
      expect.assertions(2)
      try {

         await userBusiness.login(
            "alice@lbn.com",
            "123456"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid credentials")
         expect(error.statusCode).toBe(401)
      }
   })

   test("Error when 'password' is invalid", async () => {
      expect.assertions(2)
      try {

         await userBusiness.login(
            "alice@lbn.com",
            "123456"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid credentials")
         expect(error.statusCode).toBe(401)
      }
   })

   test("Success case", async()=>{

      const idGenerator = {} as any
      const hashGenerator = {
         compareHash: jest.fn(
            () => true
         )
      } as any
      const tokenGenerator = { generate: jest.fn() } as any
      const userDatabase = {
         getUserByEmail: jest.fn(
            () => new User(
               "id",
               "Alice",
               "alice@gmail.com",
               "12345",
               UserRole.NORMAL
            )
         )
      } as any
   
      const userBusiness: UserBusiness = new UserBusiness(
         idGenerator,
         hashGenerator,
         tokenGenerator,
         userDatabase
      )
      expect.assertions(1)
      try {
         const result = await userBusiness.login(
            "Alice",
            "alice@gmail.com"
         )
         expect(result.accessToken).toBeDefined()
      } catch (error) {
         
      }
   })

})